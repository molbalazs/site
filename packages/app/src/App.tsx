import React from "react";
import "./App.css";
import { Article } from "./components/Article";

function App() {
  return (
    <Article title={"VS Code"}>
      <span>{`# How I use VS code
Try interactive playground from the startup screen.
## Useful shortcuts
###  Editing:
Delete line: ⌘⇧K
Add new line: ⌥⇧↓ / ⌥⇧↑
Multiple cursor for selection: ⌘D
Multiply cursor neighbouring lines: ⌘⌥↓ / ⌘⌥↑
Skip an occurrence with multiple cursor: ⌘K / ⌘D
Add cursor to selected elements: ⌥Enter
Check suggestion: ⌘.
IntelliSense: ⌃Space

### Navigating:
Expand / collapse sidebar: ⌘B
Expand / collapse terminal: ⌃\`
Jump to the last open file: ⌘P + P
Focus sidebar: ⌘0
Open file in file browser: ⌘↓

### Terminal:
Clear window: ⌘K
Clear line: ⌘U

## Themes
"editor.minimap.enabled": false, // never used
"files.autoSave": "afterDelay", // always forget to save
"editor.fontFamily": "Hack, Fira Code", // nice "editor.fontLigatures": true,
"breadcrumbs.enabled": false, // never used
Bracket Pair Colorizer by CoenraadS
Bracket Pair ColorizerPeacock by John Papa
Set different colour settings for different workspaces
## Plugins
### Live Share
Start a code sharing session with either by directly inviting participants, or sharing a link. With the later option, anyone can join with the link, which then triggers a notification, but should be safer to request an approval fist with the following setting:
"liveshare.guestApprovalRequired": true
Once all the participants are in the session, by default everyone will follow the host's view. They are going to jump around between files as the host navigates until they make a change. It might cause misunderstanding while presenting, if participants are still looking at something else, so there's the feature of "Focus Participants" (⌘⇧P) which makes everyone to focus on the same view. By default, VS Live Share focus requests are accepted implicitly. If you don't want people to be able to focus you, you can add the following line to your User Settings file.
"liveshare.focusBehavior": "prompt"
If needed, the terminal can be shared also both in read only, and read/write modes with the ">Live Share: Share Terminal" command.
### AWS Toolkit
### Debugger for Chrome
### GitLens
### GitHub Pull Requests and Issues`}</span>
    </Article>
  );
}

export default App;
