import * as vscode from "vscode";

import ValeProvider from "./features/vsProvider";

export function activate(context: vscode.ExtensionContext) {
  let linter = new ValeProvider();
  linter.activate(context.subscriptions);
  // TODO: Is the below needed or how to add for all defined by preferences?
  vscode.languages.registerCodeActionsProvider('markdown', linter);
}
