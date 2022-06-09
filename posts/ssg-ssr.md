---
title: "Kapan menggunakan Static Generation v.s. Server-side Rendering"
date: "2020-05-06"
---

Kami merekomendasikan menggunakan **Static Generation** (dengan atau tanpa data) kapan saja menungkinkan karena halaman anda dapat dibuat sekali dan dilayani oleh CDN, yang membuatnya lebih cepat daripada memakai server untuk render halaman pada tiap request.

Anda dapat menggunakan Static Generation untuk berbagai jenis halaman, termasuk:

- halaman Marketing
- artikel Blog
- daftar produk di E-commerce
- dokumentasi dan Help

Anda harus bertanya pada diri sendiri: "Dapatkah saya pre-render halaman ini **didepan** permintaan dari user?" Jika jawabannya ya, maka anda sebaiknya memilih Static Generation.

Disamping itu, Static Generation tidak ideal jika anda tidak dapat pre-render satu halaman didepan permintaan user. Mungkin halaman anda menampilkan informasi yang sering berubah, dan isi halamannya berubah tiap kali di akses.

Pada kasus ini, anda dapat menggunakan **Server-Side Rendering**. Ini akan lebih lambat, tetapi halaman pre-rendered akan selalu up-to-date. Atau anda dapat mengabaikannya dan menggunakan client-side Javascript untuk mengisi data.
