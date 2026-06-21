# Changelog

All notable changes to the "moho-script-helper" extension will be documented in this file.

## [1.1.0] - 2026-06-21

### Added
- Support for Moho 14.4 scripting API
- Code snippets for common Moho script patterns:
  - Full menu script template (`sn_menu`)
  - Full tool script template (`sn_tool`)
  - Utility functions (global transform, bezier handle, set project to image size)
  - Loop utilities (layers, points, channels, subchannels, smartbone actions)
- Automatic stub file diagnostics disabled for cleaner user experience

### Changed
- Updated stubs to include Moho 14.4 API features
- Improved stub file quality with diagnostic suppression
- Updated documentation to reflect Moho 14.4 compatibility

### Fixed
- Disabled unnecessary warnings in stubs file (users no longer see 465+ false errors)

### Credits
- Thanks to [MohoScripting.com](https://mohoscripting.com/) for API documentation
- Special thanks to the Moho community for feedback and support

---

## [1.0.2] - 2026-06-20

### Changed
- Updated logo for a more professional look

---

## [1.0.1] - 2026-06-20

### Added
- Initial public release
- Lua autocomplete and stubs for Moho 14.3+ scripting
- Automatic Lua Language Server configuration
- Custom Lua settings

### Credits
- Thanks to [MohoScripting.com](https://mohoscripting.com/) for API documentation