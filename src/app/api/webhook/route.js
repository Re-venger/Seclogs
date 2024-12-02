import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import fetch from 'node-fetch';  // You might need to install node-fetch

export async function POST(req) {
  try {
    const payload = await req.json();  // Parse GitHub's payload

    // Verify it's a valid push event for the correct repository and branch
    const commits = payload?.commits || [];
    if (commits.length === 0) {
      return NextResponse.json({ error: 'No commits found in the payload' }, { status: 400 });
    }

    // Loop through the added files (assuming only markdown files should be handled)
    const addedFiles = commits[0]?.added || [];
    if (addedFiles.length === 0) {
      return NextResponse.json({ error: 'No added files in this commit' }, { status: 400 });
    }

    // Ensure the commit contains markdown files
    for (const fileName of addedFiles) {
      if (fileName.endsWith('.md')) {
        const fileUrl = `https://raw.githubusercontent.com/${payload.repository.full_name}/main/${fileName}`;
        const filePath = join(process.cwd(), 'posts', fileName);  // Save file in public/posts folder

        // Fetch the raw content from GitHub
        const response = await fetch(fileUrl);
        if (!response.ok) {
          return NextResponse.json({ error: `Failed to fetch file: ${fileName}` }, { status: 500 });
        }

        const fileData = await response.text();

        // Ensure the 'posts' directory exists
        await writeFile(filePath, fileData);
        console.log(`Downloaded and saved: ${fileName}`);
      }
    }

    return NextResponse.json({ message: 'File downloaded and saved' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error downloading or saving file' }, { status: 500 });
  }
}
