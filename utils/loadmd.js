import fs, { readdir, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";



// specifying the posts dir
const postDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(){
    const fileNames = readdirSync(postDirectory);

    const allPostsData = fileNames.map((filename) =>{
        const slug = filename.replace("/\.mdx$/", "");
        const fullFilePath = path.join(postDirectory, filename);
        const fileContents = fs.readFileSync(fullFilePath, "utf-8");
        const {data:metadata, content} = matter(fileContents);
        
        // console.log(slug, metadata, content. slug);
        
        return {
            slug,
            metadata,
            content
        }
    })

    return allPostsData;
}