#!/usr/bin/env python3
"""Generate assets/station-qr-codes.pdf (one QR poster page per station + hub + worksheet)
and assets/qr/<slug>.svg (used by the hub's Settings > QR Codes modal).
Usage: pip install qrcode reportlab pillow && python3 scripts/make_qr_pdf.py
"""
import os, re, qrcode
import qrcode.image.svg
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas

BASE = "https://mjmacfadden.github.io/registration-stations/"
DOC = "https://docs.google.com/document/d/1T4CoDCfOeXmaG8HfRkp6mB3KqLw1KKSL0WY6ReUTmXg/edit?usp=drivesdk"
PAGES = [
    ("Station Menu", "Start here", BASE),
    ("Business Law", "The $67 Million Pants", BASE + "law/"),
    ("Management", "Back-to-Back Drawing", BASE + "management/"),
    ("Accounting", "The Year-Long Skimming Operation", BASE + "accounting/"),
    ("Investments", "Buy or Sell? Historical Market Quiz", BASE + "investments/"),
    ("Marketing", "Build a Bottled Water Brand", BASE + "marketing/"),
    ("Entrepreneurship", "The $50 Million Pitch", BASE + "entrepreneurship/"),
    ("Graphic Design", "Keep It or Scrap It?", BASE + "graphic-design/"),
    ("Station Worksheet", "Google Doc: File > Make a copy, then write your answers", DOC),
]

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, "assets", "station-qr-codes.pdf")
    W, H = letter
    c = canvas.Canvas(out, pagesize=letter)
    c.setTitle("Titan School of Business - Station QR Codes")
    for title, sub, url in PAGES:
        img = qrcode.make(url, box_size=12, border=2).get_image()
        c.setFont("Helvetica-Bold", 16); c.drawCentredString(W/2, H-60, "TITAN SCHOOL OF BUSINESS")
        c.setFont("Helvetica-Bold", 44); c.drawCentredString(W/2, H-120, title)
        c.setFont("Helvetica", 18); c.drawCentredString(W/2, H-150, sub)
        s = 380
        c.drawImage(ImageReader(img), (W-s)/2, H-170-s, s, s)
        c.setFont("Helvetica-Bold", 20); c.drawCentredString(W/2, H-200-s, "Scan to open")
        c.setFont("Helvetica", 12)
        c.drawCentredString(W/2, H-230-s, "Directions are always in the \"How this station works\" box at the top.")
        c.drawCentredString(W/2, H-248-s, "Write your answers in your Station Worksheet (Google Doc).")
        c.setFont("Helvetica", 8); c.drawCentredString(W/2, 40, url)
        c.showPage()
    c.save(); print("wrote", out)

    import re
    qdir = os.path.join(root, "assets", "qr"); os.makedirs(qdir, exist_ok=True)
    for title, sub, url in PAGES:
        slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
        qrcode.make(url, image_factory=qrcode.image.svg.SvgPathFillImage, border=2).save(os.path.join(qdir, slug + ".svg"))
    print("wrote", qdir)

if __name__ == "__main__":
    main()
