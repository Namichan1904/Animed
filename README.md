# Animed: how to run it, edit it and publish it

## What is in this folder

| Path | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The page shell | Rarely |
| `css/style.css` | Colors and layout | Sometimes |
| `js/engine.js` | The game (levels, XP, cases, saving) | Rarely |
| `js/art.js` | Placeholder characters (drawn in code) | No, replace with PNGs instead |
| `data/world.js` | Prologue story and the list of sealed regions | Yes |
| `data/neurology.js` | **Region 1: all neurology story and questions** | **Yes, most often** |
| `editor.html` | Case Builder form that writes the code for a question | Open it when adding questions |
| `assets/` | Your own character images go here | Yes |
| `notes/mystery-ledger.md` | Your private plot tracker (not shown in the game) | Yes |

To play on your computer, double-click `index.html`. No installation is needed.

## Add a new question (easiest way)

1. Double-click `editor.html`.
2. Fill in the form. Write the story like a person with a problem, then the findings, then the question.
3. Click **Build the code**. You get two blocks.
4. Open `data/neurology.js` (on GitHub: open the file, click the pencil icon).
5. Paste block 1 inside `cases:{ ... }`, next to the other questions. Paste block 2 inside the `beats:[ ... ]` of the chapter where it should appear, between two other items.
6. Save (on GitHub: **Commit changes**). The site updates in about a minute.
7. Open the site. If you made a typo, a red notice on the home screen tells you exactly which case and what is wrong.

**One rule:** text goes between backticks like `this`. Do not delete the backticks, and put a comma after every item that is followed by another one.

## Add a new chapter

In `data/neurology.js`, scroll to `chapters:[`. Copy an existing chapter block (from `{id:` to its closing `},`), paste it after the last chapter, and change:
- `id` (must be unique, for example `n-ch13`)
- `title`, `topic`, `summary`, `outro`
- the `beats`: scenes (`k:'scene'`) are conversation, cases (`k:'case'`) point to a question id.

Characters used in `who:` must be listed in the region's `characters:{ ... }` list. Special speakers that always work: `narrator`, `you`, `pulse`, `hush`.

To hide a story clue until later, put the `unlock:[...]` line only on the scene where you want the codex entry to appear. Entries live in `lore:{ ... }`.

## Add a new region (Cardiology, and so on)

1. Copy `data/neurology.js` to `data/cardiology.js`.
2. Change `id`, `order`, `name`, `system`, `blurb` and the `palette` colors (the whole site changes mood while inside the region).
3. Replace characters, lore, cases and chapters with your own. Case ids must be unique across the whole game (for example start Cardiology ids with `c-`).
4. In `index.html`, add one line next to the neurology line:
   `<script src="data/cardiology.js"></script>`
5. In `data/world.js`, delete that region from the `Animed.sealed` list.

## Use your own character images

Put PNG files (transparent background, about 800 px tall works well) in `assets/` with these names. The game uses them automatically; nothing else to change.

- `hero-f.png` and `hero-m.png` for the two travelers
- `pulse.png` for the lantern spirit
- `npc-<key>.png` for any character, for example `npc-orrin.png`, `npc-lira.png`

Tip for AI art: write one fixed description of each character and reuse it word for word. Generate a front, side and back sheet first, then use it as a reference. Describe looks in words only. Do not name existing characters or artists in prompts, and check each tool's license for commercial use.

## Publish on GitHub Pages (recap)

1. Make a **public** repository.
2. Upload everything from this folder so that `index.html` is at the top level, not inside another folder.
3. Settings, then Pages, then Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**, then Save.
4. Wait a minute or two. The link looks like `https://yourname.github.io/reponame/`.

If you see a 404: check the file is named exactly `index.html` (lowercase), is at the top level, the repository is public, and give it a few minutes.

## Where your progress is saved

In your own browser (local storage). Clearing site data resets it, and other devices do not share it.

## Medical content

Questions are written from your notes and standard references as a teaching draft. Review them against current guidelines and your local protocols before sharing the site publicly. Keep the "educational, not medical advice" footer.
