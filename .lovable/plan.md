## Plan: Use your real photo in the portfolio

Currently the hero section uses an AI-generated headshot at `src/assets/profile-yogesh.jpg`. You've uploaded your actual photo (`YSG_Img.jpeg`) and want it used instead.

### Steps
1. Copy `user-uploads://YSG_Img.jpeg` over `src/assets/profile-yogesh.jpg` (overwrite).
2. No component changes needed — the hero already imports from that path, so the new photo will show up automatically with the same circular frame, glowing blue border, and hover animations.

### Notes
- Your uploaded photo has a transparent/white background and a crossed-arms pose, which will look great inside the circular profile frame.
- If after seeing it you'd prefer it cropped tighter to the face (more like a traditional avatar), I can do a follow-up crop pass.