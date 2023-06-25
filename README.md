# Radix UI Component Selector

Allows you to add or delete the UI Components you want to install in bulk in the cli interface

> **This package is not provided with the support of the Radix UI team, it is unofficial**

## Installation

Add general or develop to your package.json file

`npm install -g radix-select` or `npm install -D radix-select`

## Guide

You can run Cli by typing `radix-select` command in the terminal.

```
? Would you like to add or remove components? (Use arrow keys)
❯ install 
  uninstall 
```

```
? Would you like to add or remove components? install
? Select RadixUI components to install on uninstall 🔽  
  Read more at https://www.radix-ui.com 
  (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◉ Accordion 🪗
 ◉ Alert Dialog 🚨
 ◉ Aspect Ratio 📐
 ◯ Avatar 🧑
 ◯ Checkbox ✅
 ◯ Collapsible 📦
 ◯ Context Menu 📝
(Move up and down to reveal more choices)
```

```
? Would you like to add or remove components? install
? Select RadixUI components to install on uninstall 🔽
  Read more at https://www.radix-ui.com
  Accordion 🪗, Avatar 🧑, Context Menu 📝
✔ Install success

```
