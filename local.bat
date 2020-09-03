
:: Setup
    :: Install node.
    :: Add '%AppData%\npm' to PATH.
    :: run 'npm install -g browser-sync'.

:: Script version 0.1

MODE 60, 10
@echo.
@browser-sync start --server --online "0" --files "." --notify "0" --logPrefix "server" --logFileChanges "0" --ui "0" --port "8000" --no-open
