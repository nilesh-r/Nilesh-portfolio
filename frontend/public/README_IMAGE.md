# Profile Picture Setup

To add your profile picture to the About page:

1. **Save your profile picture** with one of these names:
   - `profile-pic.jpg`
   - `profile-pic.png`
   - `profile-pic.jpeg`

2. **Place the image file** in this folder: `frontend/public/`

3. **Supported formats**: JPG, PNG, JPEG

4. **Recommended size**: 400x400px or larger (square image works best)

5. **After adding the image**, restart your development server:
   ```bash
   cd frontend
   npm run dev
   ```

**Note**: If the image doesn't appear, check:
- File name matches exactly: `profile-pic.jpg` (case-sensitive)
- File is in the `frontend/public/` folder (not in `frontend/src/`)
- File extension is correct (.jpg, .png, or .jpeg)
- Browser cache - try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

If the image still doesn't load, the page will show "NK" initials as a fallback.

