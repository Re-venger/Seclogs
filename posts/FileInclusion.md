---
id: 2
title: "First Blog"
description: "Hi there!"
date: "August 31st, 2024"
author: "NullShadow"
tags:
  - title: Me
  - title: Myself
  - title: And I
---

Types
1. L.F.I - Local File Inclusion
2. R.F.I - Remote File Inclusion
3. Directory or Path Traversal 


Methods
- File Extension checkup
- white and back listed extension testing
- Path traversal using 
	- ../../../ or ....//....//....// or URL-encoded payloads
	- php functions such as *file_get_contents()* and *allow_url_fopen() for remote file inclusion* must be on.
- 


Testing
- look for entry points <font color="red">(Must Check)</font> *GET, POST, COOKIE* etc.
- web server behaviour testing using valid and invalid inputs
- Check errors -> can show application logic flow 
- Check Filters -> for extensions, file types etc.




Prevention
- Keep all versions updated and validated.
- turn off echo and error messages to avoid information leakage.
- add a W.A.F (Web application firewall).
- block features that can cause file inclusion.
- use whitelisting and blacklisting.
- Sanitise all user inputs.