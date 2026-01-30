# Railway Hosting Guide – Step by Step (No Coding Required)

This guide is written for **non-developers**. It explains how to put your website on **Railway** so it’s live on the internet. Railway will build and host your site when you connect your project from **GitHub**.

---

## What you’ll do in short

1. Put your project on **GitHub** (so Railway can read it).
2. Create a **Railway** account and connect that GitHub project.
3. Railway **builds** and **runs** your site and gives you a **live URL**.
4. Add your **logo and images** by placing them in the right folder and updating GitHub.

You do **not** need to run commands on your computer for every update after the first setup (unless you want to). Pushing changes to GitHub will trigger a new deploy on Railway.

---

## What you need before starting

- Your **Vasthu** project folder on your computer (the one with `package.json`, `App.tsx`, etc.).
- A **GitHub** account. If you don’t have one: go to [github.com](https://github.com) → **Sign up**.
- A **Railway** account. We’ll create this in the guide.
- (Optional) **Git for Windows** if you prefer using the command line to push to GitHub. Otherwise we’ll use **GitHub Desktop** or **uploading files** on the website.

---

# Part 1: Put your project on GitHub

Your site code must be on GitHub so Railway can use it. Choose **one** of the two ways below.

---

## Option A: Using GitHub website (no Git installed)

This is the easiest if you don’t have Git or GitHub Desktop.

### Step A1: Create a new repository on GitHub

1. Open [https://github.com](https://github.com) and **log in**.
2. Click the **“+”** icon at the top right → **“New repository”**.
3. Fill in:
   - **Repository name:** e.g. `vasthu-website` (any name you like).
   - **Description:** optional, e.g. “My landing page”.
   - Leave **“Public”** selected.
   - **Do not** check “Add a README” or “Add .gitignore” (your project already has files).
4. Click **“Create repository”**.

### Step A2: Upload your project files

1. On the new repository page, click **“uploading an existing file”** (or **“Add file”** → **“Upload files”**).
2. Open your project folder on your computer:
   ```
   s:\Shreyas\Personal\Landing Page\Vasthu
   ```
3. **Select all** files and folders **except**:
   - **`node_modules`** (if it exists – do **not** upload this).
   - **`dist`** (optional – Railway will build this).
   - **Do include** **`package-lock.json`** – Railway needs it to install dependencies. If you don’t see it, run `npm install` once in your project folder and the file will appear.
   - **Do include** the **`components`** folder and **all 10 files** inside it (Header.tsx, Hero.tsx, Features.tsx, Amenities.tsx, Gallery.tsx, FloorPlans.tsx, Specification.tsx, Location.tsx, ContactForm.tsx, PopupForm.tsx). Without this folder, the build will fail with “Could not resolve ./components/Header”.
4. Drag and drop the selected items into the GitHub upload area (or click “choose your files” and select them).
5. In the box at the bottom, type a message like **“Initial upload”**.
6. Click **“Commit changes”**.

Your project is now on GitHub. You can skip to **Part 2**.

---

## Option B: Using GitHub Desktop (good if you’ll update the site often)

### Step B1: Install GitHub Desktop

1. Go to [https://desktop.github.com](https://desktop.github.com).
2. Download and install **GitHub Desktop**.
3. Open it and **sign in** with your GitHub account.

### Step B2: Create a new repository on GitHub (same as A1)

1. On [github.com](https://github.com), click **“+”** → **“New repository”**.
2. Name it e.g. **`vasthu-website`**, leave it **Public**, don’t add README.
3. Click **“Create repository”**.

### Step B3: Add your project in GitHub Desktop

1. In GitHub Desktop: **File** → **Add local repository**.
2. Click **“Choose…”** and select your project folder:
   ```
   s:\Shreyas\Personal\Landing Page\Vasthu
   ```
3. If it says “this directory does not appear to be a Git repository”, click **“create a repository”** and choose the same folder. Leave the rest as default and click **“Create repository”**.

### Step B4: Ignore `node_modules` and `dist` (important)

1. In your project folder, open the **`.gitignore`** file (using Notepad or your editor).
2. Make sure it contains at least these lines (add them if missing):
   ```
   node_modules
   dist
   .env
   .env.local
   ```
3. Save the file.

### Step B5: Publish the repository to GitHub

1. In GitHub Desktop, you should see all your project files listed.
2. At the bottom left, in the **Summary** box, type: **“Initial upload”**.
3. Click **“Commit to main”**.
4. Then click **“Publish repository”** (top right). Keep the name as is, leave **“Public”** checked.
5. Click **“Publish repository”**.

Your project is now on GitHub. Go to **Part 2**.

---

# Part 2: Create a Railway account and deploy

### Step 1: Sign up for Railway

1. Go to [https://railway.app](https://railway.app).
2. Click **“Login”** or **“Start a New Project”**.
3. Choose **“Login with GitHub”**.
4. Authorize Railway to use your GitHub account (click **“Authorize”** when asked).

You’re now logged into Railway.

---

### Step 2: Start a new project from GitHub

1. On the Railway dashboard, click **“New Project”**.
2. Choose **“Deploy from GitHub repo”**.
3. If asked, click **“Configure GitHub App”** and allow Railway to access your repositories (you can choose “All repositories” or only the one you created, e.g. `vasthu-website`).
4. In the list, find your repository (e.g. **`vasthu-website`**) and click it.
5. Railway will create a new **project** and start **building** your site. This may take 1–3 minutes.

---

### Step 3: Set build and start settings (important)

Railway needs to know how to **build** and **run** your site.

1. In your Railway project, click your **service** (the box that represents your app).
2. Open the **“Settings”** tab (or **“Variables”** / **“Deploy”** depending on the layout).
3. Find **“Build Command”** (under **Build** or **Deploy**):
   - Set it to: **`npm run build`**
4. Find **“Start Command”** or **“Start”**:
   - Set it to: **`npm start`**
5. Find **“Root Directory”** or **“Source”**:
   - Leave it **empty** (so Railway uses the root of your repo).
6. If there is **“Output Directory”**, leave it empty.
7. Click **“Save”** or wait for Railway to save automatically.

If you don’t see “Build Command” or “Start Command”:

- Look for **“Settings”** → **“Build”** and **“Deploy”**.
- Or add a file in your project (see **Part 4** below) so Railway uses the right commands by default.

---

### Step 4: Get your live website URL

1. Still in your service, open the **“Settings”** tab.
2. Find **“Networking”** or **“Public Networking”**.
3. Click **“Generate Domain”** or **“Add Domain”**.
4. Railway will give you a URL like:  
   **`https://vasthu-website-production.up.railway.app`**  
   (yours will be different).
5. Click that URL to open your site in the browser.

If the page is blank or shows an error, wait 1–2 minutes (build might still be running) and refresh. If it still fails, check **Part 6 (Troubleshooting)**.

---

# Part 3: Add your logo and images

Your site expects images in a specific place. On Railway, the project is built from GitHub, so you put images in your **project folder** and then update GitHub.

### Step 1: Prepare images on your computer

1. Get these files ready:
   - **Logo:** e.g. `logo.png` (transparent background works well).
   - **Banner:** e.g. `banner.jpg` (wide image for the hero section).
   - **Gallery:** 6 images named **`g1.jpg`**, **`g2.jpg`**, … **`g6.jpg`**.
   - **Floor plans:** 3 images named **`f1.jpg`**, **`f2.jpg`**, **`f3.jpg`**.

2. On your computer, go to your project folder and then into **`public`** → **`images`**:
   ```
   s:\Shreyas\Personal\Landing Page\Vasthu\public\images
   ```
   You should see folders **`gallery`** and **`floorplans`** (they may be empty or have `.gitkeep`).

3. Copy your files as follows:
   - **`logo.png`** and **`banner.jpg`** → directly inside **`public\images`**.
   - **`g1.jpg`** … **`g6.jpg`** → inside **`public\images\gallery`**.
   - **`f1.jpg`**, **`f2.jpg`**, **`f3.jpg`** → inside **`public\images\floorplans`**.

### Step 2: Upload these to GitHub

**If you use the GitHub website (Option A):**

1. Go to your repository on [github.com](https://github.com).
2. Open **`public`** → **`images`**.
3. Click **“Add file”** → **“Upload files”**.
4. Upload **`logo.png`** and **`banner.jpg`** into **`images`**.
5. Open **`images/gallery`** and upload **g1.jpg** … **g6.jpg**.
6. Open **`images/floorplans`** and upload **f1.jpg**, **f2.jpg**, **f3.jpg**.
7. Commit with a message like **“Add logo and images”**.

**If you use GitHub Desktop (Option B):**

1. In GitHub Desktop, you’ll see the new/changed files (logo, banner, gallery, floorplans).
2. Type a summary, e.g. **“Add logo and images”**.
3. Click **“Commit to main”**.
4. Click **“Push origin”** to send the changes to GitHub.

Railway will **automatically** start a new build and deploy. In 1–3 minutes, refresh your Railway URL; your logo and images should appear.

---

# Part 4: Make sure Railway builds and runs correctly (config file)

So you don’t have to set Build/Start commands in the dashboard every time, you can add a small config file to your project. Your project may already be set up; if Railway builds and runs fine, you can skip this.

We’ll add a **`nixpacks.toml`** or rely on **`package.json`** scripts. Railway already uses:

- **Build:** `npm run build` (from `package.json`)
- **Start:** `npm start` (from `package.json`)

So if **Part 2** worked, you don’t need to add anything. If Railway didn’t build or start correctly, in the Railway service **Settings** double-check:

- **Build Command:** `npm run build`
- **Start Command:** `npm start`

No need to install anything extra on your computer for this.

---

# Part 5: Use your own domain (optional)

You can show your site on a domain like **www.yourdomain.com** instead of the Railway URL.

1. In Railway, open your **service** → **Settings** → **Networking** / **Domains**.
2. Click **“Custom Domain”** or **“Add Domain”**.
3. Enter your domain (e.g. **`www.yourdomain.com`**).
4. Railway will show you a **CNAME** or instructions (e.g. point **www** to the Railway URL).
5. In your **domain registrar** (where you bought the domain), open **DNS** settings and add the record Railway asks for (usually a **CNAME** record for **www** pointing to the Railway hostname).
6. Save DNS and wait a few minutes (up to 24 hours). Railway will then serve your site on your domain.

---

# Part 6: Troubleshooting

| What you see | What to do |
|--------------|------------|
| **“Could not resolve ./components/Header”** (or similar **./components/…** error) | The **`components`** folder (and its .tsx files) is missing from your GitHub repo. Add the **`components`** folder with all 10 files: Header.tsx, Hero.tsx, Features.tsx, Amenities.tsx, Gallery.tsx, FloorPlans.tsx, Specification.tsx, Location.tsx, ContactForm.tsx, PopupForm.tsx. See “Add the missing components folder” below. |
| **“npm ci can only install when package.json and package-lock.json are in sync”** or **“Missing: serve@… from lock file”** | Railway needs **`package-lock.json`** in your repo. On your computer, open the project folder, run **`npm install`** once (this creates/updates `package-lock.json`). Then **upload** or **push** the **`package-lock.json`** file to GitHub. Trigger a new deploy on Railway (or push again). |
| **Blank page** | Wait 2–3 minutes after the first deploy and refresh. Check Railway **Deployments** for a successful build. |
| **“Application failed to respond”** | In **Settings**, set **Start Command** to **`npm start`** and **Build Command** to **`npm run build`**. Trigger a new deploy (e.g. push a small change to GitHub). |
| **Build failed** | In Railway, open the latest **Deploy** and read the **build logs**. Often it’s because `node_modules` was committed – remove it from GitHub and add `node_modules` to **`.gitignore`**, then push again. Or the lock file is missing – run `npm install` and push **`package-lock.json`**. |
| **Logo or banner not showing** | Make sure files are named exactly **`logo.png`** and **`banner.jpg`** and are in **`public/images/`** (and that you pushed to GitHub). After push, wait for Railway to finish redeploying. |
| **Gallery images missing** | Use exact names **g1.jpg** … **g6.jpg** in **`public/images/gallery/`** and push to GitHub. |
| **Changes don’t appear** | Every change must be **pushed to GitHub**. Railway only redeploys when the GitHub repo is updated. After pushing, wait for the new deployment to finish. |

### Add the missing components folder (fix “Could not resolve ./components/Header”)

Your repo must contain a **`components`** folder with these 10 files. If the build fails with “Could not resolve ./components/Header”, add them like this:

**Using the GitHub website:**

1. Open your repository on GitHub.
2. Click **“Add file”** → **“Create new file”**.
3. In the name box, type: **`components/Header.tsx`** (this creates the folder and file).
4. Open **`s:\Shreyas\Personal\Landing Page\Vasthu\components\Header.tsx`** on your computer, copy **all** its contents, and paste into the GitHub editor.
5. Scroll down, type a commit message (e.g. “Add components folder”), and click **“Commit new file”**.
6. Repeat for each file: **Hero.tsx**, **Features.tsx**, **Amenities.tsx**, **Gallery.tsx**, **FloorPlans.tsx**, **Specification.tsx**, **Location.tsx**, **ContactForm.tsx**, **PopupForm.tsx** (each time use the path **`components/Filename.tsx`** and paste the matching file contents from your computer).

**Easier: upload the whole folder**

1. On GitHub, go to your repo root.
2. Click **“Add file”** → **“Upload files”**.
3. On your computer, open **`s:\Shreyas\Personal\Landing Page\Vasthu\components`**.
4. Select **all 10 .tsx files** (Header.tsx, Hero.tsx, Features.tsx, Amenities.tsx, Gallery.tsx, FloorPlans.tsx, Specification.tsx, Location.tsx, ContactForm.tsx, PopupForm.tsx).
5. Drag them into the GitHub upload area. **Important:** GitHub will put them in the root. After uploading, you must **move** each file into a folder named **`components`**:
   - Create a new file named **`components/Header.tsx`** (type **components/** in the name box), paste the contents of Header.tsx, and save. Then delete the Header.tsx you uploaded in the root. Repeat for each file, **or**
   - Use GitHub Desktop: clone the repo, copy your full **components** folder into the cloned repo, commit, and push. Then all 10 files will be in **components/** at once.

**Using GitHub Desktop (simplest if you have it):**

1. Clone your repository to your computer (if you haven’t already).
2. Copy the entire **`components`** folder from **`s:\Shreyas\Personal\Landing Page\Vasthu\components`** into the cloned repo folder (so the cloned repo has a **components** folder with all 10 .tsx files).
3. In GitHub Desktop, commit the new **components** folder and click **“Push origin”**.

After the **components** folder (with all 10 files) is in the repo, Railway will redeploy and the build should succeed.

---

# Quick checklist (summary)

1. Put project on **GitHub** (upload via website or use GitHub Desktop).
2. Sign up at **Railway** with **Login with GitHub**.
3. **New Project** → **Deploy from GitHub repo** → choose your repo.
4. In **Settings**, set **Build Command:** `npm run build`, **Start Command:** `npm start`.
5. **Generate Domain** and open the URL to see your site.
6. Add **logo.png**, **banner.jpg**, and gallery/floorplan images to **`public/images/`** (and subfolders), then **upload/push to GitHub**.
7. Wait for Railway to redeploy; refresh the site.

---

# Updating your site later

- **Text or content (e.g. amenities, footer):**  
  Edit the right file in your project (e.g. `constants.tsx`, `App.tsx`), then **push to GitHub** (upload the changed file or commit in GitHub Desktop). Railway will redeploy automatically.

- **Images:**  
  Replace or add files in **`public/images/`**, then push to GitHub again.

You don’t need to run `npm run build` on your computer for Railway; Railway runs the build for you when you push.

If you want, the next step can be a **short “first time only” checklist** (e.g. 1-page PDF style) you can print and follow in order.
