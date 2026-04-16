#!/usr/bin/env python3
"""Simple HTTP server for monument calculator"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"╔═══════════════════════════════════════════════════╗")
    print(f"║   Калькулятор смет — Локальный сервер запущен    ║")
    print(f"╚═══════════════════════════════════════════════════╝")
    print(f"\n🌐 Откройте в браузере: http://localhost:{PORT}")
    print(f"⏹  Для остановки нажмите Ctrl+C\n")
    
    try:
        webbrowser.open(f'http://localhost:{PORT}')
    except:
        pass
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✓ Сервер остановлен")
