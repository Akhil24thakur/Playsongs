import sys
import time
from pyngrok import ngrok

# Configure ngrok to be verbose if needed (optional)
# ngrok.set_auth_token("TOKEN") # We hope it works without or user configures it

try:
    # Open a HTTP tunnel on the default port 5500
    public_url = ngrok.connect(5500).public_url
    print(f"Tunnel successfully started!")
    print(f"Public URL: {public_url}")
    sys.stdout.flush()
    
    # Keep the script running
    while True:
        time.sleep(1)
except Exception as e:
    print(f"Error starting tunnel: {e}")
    sys.exit(1)
