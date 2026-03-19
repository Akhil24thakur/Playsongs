import sys
import time
from pyngrok import ngrok

try:
    # Open a HTTP tunnel on the default port 5500
    public_url = ngrok.connect(5500).public_url
    
    # Write to file
    with open("tunnel_url.txt", "w") as f:
        f.write(public_url)
        
    print(f"Tunnel successfully started!")
    print(f"Public URL: {public_url}")
    sys.stdout.flush()
    
    # Keep the script running
    while True:
        time.sleep(1)
except Exception as e:
    with open("tunnel_url.txt", "w") as f:
        f.write(f"Error: {e}")
    print(f"Error starting tunnel: {e}")
    sys.exit(1)
