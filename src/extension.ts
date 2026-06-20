import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    console.log('Moho Script Helper is now active!');

    const stubsPath = path.join(context.extensionPath, 'stubs', 'moho-stubs.lua');
    
    if (fs.existsSync(stubsPath)) {
        const config = vscode.workspace.getConfiguration();
        const currentLibrary = config.get<string[]>('Lua.workspace.library') || [];
        
        if (!currentLibrary.includes(stubsPath)) {
            const updatedLibrary = [...currentLibrary, stubsPath];
            config.update('Lua.workspace.library', updatedLibrary, vscode.ConfigurationTarget.Global);
        }
    } else {
        console.warn('moho-stubs.lua not found at:', stubsPath);
    }
}

export function deactivate() {}