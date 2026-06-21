# Moho Script Helper

Lua autocomplete, stubs, and snippets for Moho scripting.

## Features

- 🚀 **Autocomplete for Moho API** — Full IntelliSense for Moho modules, classes, and their properties (`moho.`, `LM.`, `MOHO.`, and more)
- 📁 **Moho Stubs** — Bundled `moho-stubs.lua` provides accurate type hints for all Moho classes, modules, properties, and functions with proper error checking
- 🧠 **Error Checking** — Get real-time feedback on your code with proper type checking
- 🎨 **Code Snippets** — Ready-to-use templates for common Moho script patterns:

### Snippets Available

| Snippet | Prefix | Description |
|---------|--------|-------------|
| **Menu Script Template** | `sn_menu` | Full menu script with dialog, prefs, and localization |
| **Tool Script Template** | `sn_tool` | Full tool script with mouse/keyboard events and DrawMe |
| **Global Transform (With Camera)** | `sn_layer_matrix&Cam` | Gets full global transform of a layer including camera |
| **Global Transform (Without Camera)** | `sn_layer_matrixNoCam` | Gets global transform of a layer excluding camera |
| **Bezier Handle Position** | `sn_get_BezierHandlePos` | Calculates Bezier handle position from curvature, weight, and offset |
| **Set Project to Image Size** | `sn_doc_set_dim_image` | Sets project dimensions to match selected image layer |
| **Loop All Layers** | `sn_loop_layers` | Iterates through every layer in the document |
| **Loop Points** | `sn_loop_points` | Iterates through all points in a mesh |
| **Loop Channels** | `sn_loop_channels` | Iterates through all channels in a layer |
| **Loop Subchannels** | `sn_loop_subchannels` | Iterates through all subchannels in a layer |
| **Loop Smartbone Actions** | `sn_loop_smartbones` | Iterates through all smart bone actions in a layer |

## Requirements

- VS Code 1.125.0 or higher
- [Lua Language Server](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) extension

## Supported Moho Versions

✅ Supports Moho 14.4 and all versions up to it.

## Installation

1. Install from the VS Code Marketplace
2. Restart VS Code
3. Open a `.lua` file
4. Start typing `MOHO.` or `LM.` or `LM.GUI.` — autocomplete will appear instantly!
5. To create a new script from scratch, type `snm` (for a menu script) or `snt` (for a tool script) and press Enter. Then type your desired script name — it will automatically update throughout the entire script!

## Credits

Special thanks to the [MohoScripting.com](https://mohoscripting.com/) community for their documentation and support.

## License

MIT

## Author

**Modelman** – [YouTube](https://www.youtube.com/@modelmananimation) | [GitHub](https://github.com/modelman-animation)