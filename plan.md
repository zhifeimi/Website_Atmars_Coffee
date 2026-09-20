# Plan — Ariel's Coffee Dapto Website

## Goal
Create an attractive, appetite-stimulating coffee shop website for Ariel's Coffee Dapto (if none exists), informed by real customer reviews, social media presence, and their actual menu.

## Stage 1 — Research (no skill; orchestrator-led + explore subagents)
- Check whether Ariel's Coffee Dapto already has an official website.
- Google Maps listing: ratings, review themes, popular items, photos, hours, address, vibe.
- Instagram (@arielsdapto) & Facebook (ArielsDapto): visual style, signature dishes, branding.
- Bopple menu (bopple.app/arielsdapto/menu): actual menu items & prices.
- Collect real, hotlinkable image URLs of coffee/food (their own or suitable stock) for the site.
- Output: research brief (brand facts, menu, review highlights, image URL list, design cues).

## Stage 2 — Design & Build (skills: vibecoding-webapp-swarm → webapp-building-swarm)
- Load vibecoding-webapp-swarm (design-first React workflow), then webapp-building-swarm artifact skill.
- Delegate design + build to coder subagent(s):
  - Hero with appetizing imagery, warm coffee-house palette (cream, caramel, espresso brown, muted terracotta/sage accents — low saturation, warm tones).
  - Sections: Hero, About/Story, Menu highlights (from Bopple), Gallery, Reviews (real Google Maps quotes), Visit Us (hours, address, map link, socials), Contact.
  - Smooth animations, exquisite typography, refined artwork.
- Output: working React/Vite site.

## Stage 3 — Verify & Deliver
- Build the site, verify it compiles, review visually (screenshot).
- Deliver via mshtools-website_version_manager (build_version, type=static).
