
## Class-day setup (worksheet + QR codes)

**Directions:** every station shows a **"How this station works"** box directly under the top bar, with numbered steps (start timer → phases → write answers in the worksheet → return to menu). Steps live in each station's `window.STATION_GUIDE`; the panel is rendered by `assets/station-guide.js`.

**Worksheet (no backend):** students write answers in the Google Doc
https://docs.google.com/document/d/1T4CoDCfOeXmaG8HfRkp6mB3KqLw1KKSL0WY6ReUTmXg/edit?usp=drivesdk
- Share it as *Anyone with the link → Viewer*. Students open it and choose **File → Make a copy** to get their own editable version.
- The link appears in the hub banner and in every station's directions box. (The old Entrepreneurship Google Form button now opens the Doc.)

**QR posters:** `assets/station-qr-codes.pdf` — 9 letter-size pages: Station Menu, the 7 stations, and the Worksheet. Print and post one at each station.
- QRs point to GitHub Pages: `https://mjmacfadden.github.io/registration-stations/<station>/`. Pages builds from `main`, so merge this branch before class for the new directions to be live.
- Regenerate: `python3 -m venv .venv && .venv/bin/pip install qrcode reportlab pillow && .venv/bin/python scripts/make_qr_pdf.py`
