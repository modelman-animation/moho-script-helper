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

## Type Hinting Recommendations

To get the best autocomplete, type checking, and IntelliSense experience, follow these recommendations when writing Moho scripts.

### Properties vs Methods

In general:

* Use `.` when accessing properties.
* Use `:` when calling methods.

Example from the Moho API:

```lua
local layer = moho.layer

-- Property access
local layerName = layer.fName

-- Method call
local layerType = layer:LayerType()
```

Using the correct syntax allows Lua Language Server to provide more accurate autocomplete and type checking.

### Typing Existing Scripts

For scripts that were written before installing this extension, it is recommended to explicitly specify the script type on the script table.

```lua
---@type MohoScript
local Ab_MyScript = {}
```

This helps Lua Language Server understand that the table represents a Moho script and enables proper autocomplete for script-related fields and functions.

### Typing `moho` in Custom Functions

When you create your own helper functions that receive a `moho` parameter, Lua Language Server cannot automatically determine its type.

To enable proper autocomplete and type checking, add the following annotation above the function:

```lua
---@param moho ScriptInterface
function Ab_MyScript:CreateLayer(moho)
	local layer = moho.layer
end
```

This is especially important for custom functions, since the type of `moho` is often lost once it is passed between functions.

For example:

```lua
---@param layer MohoLayer
---@param layerName string
function Ab_MyScript:RenameLayer(layer, layerName)
	layer:SetName(layerName)
end
```

The same approach can be used for any additional parameters in your own functions.

### Function Documentation (Optional)

You can also document your custom functions with descriptions, parameter information, and return values. These descriptions appear in hover tooltips and autocomplete information.

```lua
--- Renames a layer.
---@param layer MohoLayer The layer to rename.
---@param layerName string The new layer name.
---@return boolean True if the rename operation succeeded.
function Ab_MyScript:RenameLayer(layer, layerName)
	layer:SetName(layerName)
	return true
end
```

### Multiple Possible Types

If a parameter or return value can have multiple possible types, use the `|` operator:

```lua
---@param value string|boolean|nil
function Ab_MyScript:SetValue(value)
	-- function code here
end
```

You can use any combination of supported types:

```lua
---@param layer MohoLayer|nil
---@param name string|number
---@return string|boolean|nil
```

This allows Lua Language Server to understand all valid types and provide more accurate autocomplete, type checking, and error reporting.

## Credits

Special thanks to the [MohoScripting.com](https://mohoscripting.com/) community for their documentation and support.

## License

MIT

## Author

**Modelman** – [YouTube](https://www.youtube.com/@modelmananimation) | [GitHub](https://github.com/modelman-animation)