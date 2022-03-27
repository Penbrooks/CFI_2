# Christian Film Industry - Web Application

## Project Setup
1.install node and npm.
2. git clone https://gitlab.com/Humat/cfi-reactjs.git.
3. cd cfi-reactjs
4. yarn (or npm install)
5. yarn dev (or npm run dev) - Dev Env
6. yarn build (or npm run build) - Prod Env 

## Coding Standards - Follow below steps to review code before merging it to MASTER
1. Use small letter (ex- dashboardLayout) to create a folder and file names for consistency, and instead of index.js use appropriate name for files and components.
2. Do not commit package-lock.json unless there is a new library/component installed.
3. Do not include commented code unless there is some future use and add a comment with "TODO" so that cannot be reomved from code for future use.
4. Always use prop-types to define props in your component to avoid warning message of "Failed prop type: Invalid prop .."
5. ##### Use EsLint Extension (Suggested - https://rb.gy/tpcqre), which will check for strict set of rules(coding mistakes and standards).