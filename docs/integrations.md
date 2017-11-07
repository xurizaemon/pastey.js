# Integrations

If you've worked out how to get Pastey to connect to your file manager, automotive HUD or IoT vegetables in an interesting way, please help expand this document :) 

## Right-click from Nautilus file manager

Add the following executable script to `~/.local/share/nautilus/scripts/Pastey`:

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
