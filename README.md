# Frontend Practice Projects

A collection of HTML, CSS, and JavaScript exercises organised by task.

## Project guide

| Project | Entry point | Focus |
| --- | --- | --- |
| Basic to-do list | [To-Do.html](Basic%20To-Do/To-Do.html) | Task-list interactions |
| Calculator | [calculator.html](Calculator/calculator.html) | Calculator interface and JavaScript |
| Login demo | [login.html](Login%20Authentication/login.html) | Registration/login screen interactions |
| Tribute page | [Tribute.html](Tribute%20page/Tribute.html) | Static page layout and styling |

## Run locally

Clone or download the repository, then open an entry-point HTML file in a browser. Keep its neighbouring CSS and JavaScript files in place.

For a local web server, run this from the repository root:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` and choose a project folder.

## Login demo boundary

The login exercise keeps usernames and plain-text passwords in an in-memory JavaScript array. Accounts disappear when the page reloads, and all checks run in the browser. Use fictional test credentials only; this is an interface exercise and does not provide secure authentication.
