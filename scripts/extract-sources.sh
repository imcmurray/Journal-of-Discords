#!/bin/bash
# Extract HTML files from all JoD EPUB volumes
# Usage: bash scripts/extract-sources.sh

EPUB_DIR="sources/epubs"
HTML_DIR="sources/html"

# Change to project root
cd "$(dirname "$0")/.." || exit 1

echo "Extracting Journal of Discourses HTML from EPUBs..."
echo "EPUB source: $EPUB_DIR"
echo "HTML output: $HTML_DIR"
echo ""

extracted=0
missing=0

for i in $(seq 1 26); do
    VOL=$(printf "%02d" $i)
    EPUB="$EPUB_DIR/JournalOfDiscoursesVol${i}.epub"

    if [ -f "$EPUB" ]; then
        echo "Extracting Volume $i..."
        mkdir -p "$HTML_DIR/vol-$VOL"
        unzip -q -o "$EPUB" "OEBPS/*.html" -d "$HTML_DIR/vol-$VOL"

        # Move files up from OEBPS/ subdirectory
        if [ -d "$HTML_DIR/vol-$VOL/OEBPS" ]; then
            mv "$HTML_DIR/vol-$VOL/OEBPS/"*.html "$HTML_DIR/vol-$VOL/" 2>/dev/null
            rmdir "$HTML_DIR/vol-$VOL/OEBPS" 2>/dev/null
        fi

        # Count files extracted
        count=$(ls -1 "$HTML_DIR/vol-$VOL/"*.html 2>/dev/null | wc -l)
        echo "  -> $count HTML files"
        ((extracted++))
    else
        echo "Volume $i not found: $EPUB"
        ((missing++))
    fi
done

echo ""
echo "Done!"
echo "Extracted: $extracted volumes"
echo "Missing: $missing volumes"

if [ $missing -gt 0 ]; then
    echo ""
    echo "To complete setup, copy missing EPUB files to: $EPUB_DIR"
fi
