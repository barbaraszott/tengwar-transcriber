# Tengwar Transcriber

Transcribe english into Grey-elven Tengwar.

Live version: https://barbaraszott.github.io/tengwar-transcriber/

## Table of contents

- [Introduction](#introduction)
- [March 25, 3019 of the Third Age](#march-25-3019-of-the-third-age)
- [Mode of Beleriand - what is it?](#mode-of-beleriand)
- [Technologies](#technologies)
- [Project status](#project-status)

## Introduction

March 25 is National Tolkien Reading Day. This year on that very day I came up with an idea to create simple transciber - from english alphabet to elvish. It is not a translator though.

## March 25, 3019 of the Third Age

I'm pretty sure you've heard of these events! Frodo Baggins and Samwise Gamgee reachead the Sammath Naur, Gollum seized the Ring and fell in the Cracks of Doom and the One Ring was ultimately destroyed in the fires of Mount Doom. Sauron was finally defeated and his armies and buildings were completely destrucuted. Very important day for Middle-earth!

(Also: two years later, when the Fourth Age of the Sun began according to reckoning of Gondor, Sam's and Rosie's daughter was born - Elanor the Fair.)

### Inspiration

Tolkien noted in Nomenclature that the date the Ring was destroyed was purposefully chosen. It coincides with the feast of [Annunciation](https://en.wikipedia.org/wiki/Annunciation) or [Lady Day](https://en.wikipedia.org/wiki/Lady_Day).

## Mode of Beleriand

Tengwar is a writing system created by J.R.R. Tolkien. 

A *mode* of Tengwar is a set of conventions used to transcribe a language with Tengwar.

The **mode of Beleriand** is a full mode where vowels are represented by separate Tengwar and which can be used to transcribe Sindarin or English. We can assume that this mode was created in Beleriand. I believe most known example is the elvish phrase written on Doors of Durin (west gate of Moria).

![alt text](https://i.stack.imgur.com/rj9yX.jpg "Doors of Durin")

The inscription on the gate was made before Second Age 1697, when Celebrimbor died. At the end of the Third Age, Frodo could not decipher it: "I thought I knew the elf-letters, but I cannot read these".

## Technologies

- Vanilla JavaScript (ES6)
- SCSS as a CSS preprocessor
- BEM methodology

## Project status

Transcriber works fine for standard english letters and specific consonants like `dh`, `kh`, `lh`, `ng`, `rh`, `th`, also for specific doubles like `mm`, `nn`, `ss`. After every paragraph (ended with new line) special sign is added.

In progress:
- styles
- numbers (in tengwar base is 12 and digits are written from right to left)
- interpunction
- diphthongs: `ae`, `oe`, `ai`, `ei`, `ui`, `au/aw`
- doubled (geminated) consonants except for `m`, `n` and `s` (they should be written with a doubled-tengwa)
- nasalized consonants `nt`, `nd`, `mp`, `mb`, `nc`, `ng` (they should be indicated by a line placed above the tengwa)
- letter `r` - distinction between Roomen and Oore (the second one should be used at the final word position)
