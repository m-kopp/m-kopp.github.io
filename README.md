# Band-Website mit Hugo

Dies ist die Hugo-basierte Website einer Band mit moderner und poppiger 90s-Optik.

## Galerie
- Lege deine Bilder im Ordner `static/images/galerie` ab (z. B. `.jpg`, `.png`, `.bmp`)
- Die Galerie-Seite (`/gallerie/`) zeigt automatisch alle Bilder aus diesem Ordner an
- Du musst keine Bildnamen im Inhalt pflegen

## Inhalte bearbeiten
- Seiteninhalte findest du im Ordner `content/`
- Die Galerie findest du unter `content/gallerie/_index.md`
- Weitere Seiten wie Band, Tour, Kontakt, Impressum im jeweiligen Unterordner

## Design anpassen
- Das Haupt-CSS liegt in `static/css/main.css`
- Für eigene Anpassungen kannst du dort Farben, Schriften und Layouts ändern

## Lokale Entwicklung starten
   
   ```zsh
   hugo server -D
   ```

## Hinweise
- Bilder im Ordner `static/images/galerie` werden direkt ausgeliefert, Dateinamen und Groß-/Kleinschreibung beachten!
- Neue Bilder erscheinen nach dem nächsten Build automatisch in der Galerie


