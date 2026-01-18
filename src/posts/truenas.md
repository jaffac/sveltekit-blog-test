---
title: 'TrueNAS SCALE and the Art of the Minimalist Server'
description: 'My minimalist 10-app stack for data sovereignty on an HP EliteDesk.'
date: '2026-01-18'
categories:
  - self-hosting
  - technology
  - minimalism
published: true
---

## Introduction

We often build home servers to escape the sprawling, chaotic gardens of the cloud, only to find ourselves drowning in the weeds of a hundred Docker containers. In the quiet hum of 2026, my TrueNAS SCALE setup runs exactly ten applications. This is the "Essential Stack"—a stack meticulously curated to provide full digital sovereignty without the maintenance tax.

This journey is about reclaiming that promise through intentionality. It is about building a digital home with only what is truly essential, leaving room for clarity, purpose, and the sound of silence.

## The Machine: Efficiency Over Excess

Before we talk about the software, let’s talk about the iron. There’s a common myth that you need enterprise-grade rack hardware to run a "proper" server. My setup proves the opposite. I run my entire digital life on an **HP EliteDesk 800 G5 Small Form Factor PC**.

Inside is an **Intel i5-9500** and **32GB of RAM**. It’s a small-form-factor machine that sips power and stays silent in the corner of the room. In 2026, this 9th-gen hardware is the "sweet spot" for a minimalist: it’s incredibly affordable on the secondary market, yet its six cores handle Plex transcodes and Immich machine learning without breaking a sweat. The 32GB of RAM is the real hero, giving TrueNAS plenty of room for its ZFS cache (ARC), ensuring that file access feels instantaneous.

---

## The Pillars of my Digital Home

### 1. The Secure Network (The Power Trio)

This is the invisible infrastructure ensuring my data flows securely.

- **Pi-hole:** My network-wide silent guardian. It doesn't just block ads; it acts as my **Local DNS**, allowing me to use friendly names like `book.home.app` instead of messy IP addresses for my library.
- **Tailscale:** The "Invisible Wire." It connects my phone and laptop to my home server anywhere in the world. By using Pi-hole as my Tailscale nameserver, I get ad-blocking and local DNS resolution even when I’m on 5G.
- **Nginx Proxy Manager:** The traffic cop. It handles my **private SSL certificates** and routes traffic to the right app, ensuring that every service is accessed via a secure, encrypted, and human-readable subdomain.

### 2. The Memory Palace (Curation & Quality)

This is where my digital life lives and breathes.

- **Immich:** The king of self-hosted photos. On the i5-9500, the facial recognition and backup speeds are remarkably fast.
- **Booklore:** My private library. A sanctuary for my digital books, decoupled from proprietary ecosystems.
- **Plex & Tautulli:** My cinematic archive. Reliable, high-quality, and (thanks to Tautulli) full of the data insights I love.

### 3. Home-Friendly Automations

The rest of my "Essential Stack" focus on making life easier without adding clutter:

- **Code-Server:** VS Code in the browser. I use this to edit my blog and server scripts directly on the machine.
- **Forgejo:** A lightweight Git forge. My code and server configs stay private and version-controlled.
- **Cloudflared:** A secure, "no-open-ports" tunnel that acts as a reliable backup for remote access.

---

## The Harmony of Understated Power

The true beauty of this setup is its harmony. By running TrueNAS on a compact HP EliteDesk, I’ve reached a state of **Hardware Zen**. The server is cool, quiet, and reliable.

It’s not about how much hardware you can buy; it’s about how much utility you can extract from a well-chosen, minimalist machine. Digital sovereignty isn't a luxury for those with server racks—it’s a choice for anyone with a recycled office PC and a desire for control.

_What does your "essential stack" look like in 2026?_
