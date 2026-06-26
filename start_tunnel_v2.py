import os
import sys
import time
from pyngrok import ngrok

""" ═══════════════════════════════════════════════════════════════
     SECURITY WARNING:
     This script exposes your local server to the public internet.
     Anyone with the generated URL can access your app and audio files.

     To prevent accidental exposure, this script requires the
     environment variable PLAYLIST_TUNNEL_ENABLED=1 to run.

     Usage (when intentionally needed):
       $env:PLAYLIST_TUNNEL_ENABLED=1; python start_tunnel.py
     or
       PLAYLIST_TUNNEL_ENABLED=1 python start_tunnel.py
     ═══════════════════════════════════════════════════════════════ """

if os.environ.get("PLAYLIST_TUNNEL_ENABLED") != "1":
    print("SECURITY: Tunnel not started. Set PLAYLIST_TUNNEL_ENABLED=1 to confirm.")
    print("This prevents accidentally exposing your local server to the internet.")
    sys.exit(0)

PORT = int(os.environ.get("PLAYLIST_TUNNEL_PORT", "5500"))

try:
    public_url = ngrok.connect(PORT).public_url
    print(f"Tunneling to localhost:{PORT}")

    with open("tunnel_url.txt", "w") as f:
        f.write(public_url)

    print(f"Tunnel successfully started!")
    print(f"Public URL: {public_url}")
    print("WARNING: This URL is publicly accessible. Close the tunnel when done.")
    sys.stdout.flush()

    while True:
        time.sleep(1)
except Exception as e:
    with open("tunnel_url.txt", "w") as f:
        f.write(f"Error: {e}")
    print(f"Error starting tunnel: {e}")
    sys.exit(1)
