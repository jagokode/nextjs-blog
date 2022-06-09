---
title: "Dua Format Pre-rendering"
date: "2020-06-06"
---

Next.js punya 2 format untuk pre-rendering, yaitu: **Static Generation** dan **Server-side Rendering**. Perbedaannya terletak pada **kapan** itu menghasilkan halaman HTML.

- **Static Generation** adalah metode pre-rendering yang menghasilkan HTML saat **build time**. HTML yang pre-rendered kemudian _reused_ pada setiap request.
- **Server-side Rendering** adalah metode pre-rendering yang menghasilkan HTML pada **setiap request**.

Penting, Next.js memberi anda **pilihan** bentuk pre-rendering yang mana akan anda gunakan untuk setiap halaman. Anda dapat menciptakan "hybrid" aplikasi Next.js dengan menggunakan Static Generation untuk sebagian besar halaman dan Server-side Rendering untuk halaman yang lain.
