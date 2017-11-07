# Integrations

## Right-click from Nautilus file manager

Add the following script to `~/.local/share/nautilus/scripts/Pastey`:

    #!/bin/bash

    IFS_BAK=$IFS
    IFS="
    "
    for line in $NAUTILUS_SCRIPT_SELECTED_FILE_PATHS; do
      if [[ "$line" == "" || "$line" == " " ]]; then
        exit
      else
        pastey "$line" | xclip -selection clipboard
        notify-send "Pastey URL copied"
        exit
      fi
    done

* Requires xclip and notify-send
* Only works with first selected file.
