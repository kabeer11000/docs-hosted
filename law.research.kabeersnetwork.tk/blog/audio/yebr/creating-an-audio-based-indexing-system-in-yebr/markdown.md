<div id="BLOG_META_DATA" tags="BETA" heading="[BETA] Creating a audio based indexing system in Yebr " excerpt="A complex mix of audio and ai that will help Yebr recognise tracks found anywhere on the web" cover-image="https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/1_8HtK4oAeg8LiJH80IZqxZg.png" style="visibility:hidden"></div>

# Creating a audio based indexing system in Yebr 
This Document is currently in early beta
<small>Part if the serise on Yebr's experimental AI</small>

![Knowledge graph](https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/1_8HtK4oAeg8LiJH80IZqxZg.png "Knowledge graph")

A complex mix of audio and ai that will help Yebr recognise tracks found anywhere on the web, 
our system is driven by spiders that find content, and a recognition engine that creates a database graph.

## Introduction

Yebr mainly sources its data from Youtube, To make music discovery and content recommendations on Yebr, we added a legacy indexing system which relied on Youtube Video Id mapping, this holds song metadata, e.g. titles, channels etc. The system worked by upstream addition of unique video ids inside a SQL-like database. this created a subset of the actual youtube index for videos that users on Yebr had streamed, the system helped give the base for other Yebr functions such as recommendations, which rely on this sub-index as a corpus.

However we soon realised that this approach comes with its drawbacks, for starters, this approach limits users on Yebr from getting newer content recommended to them, as songs that are inside this corpus are much more likely to be cycled and recommended, without user activity this system would never get updated, and new users will always be presented with outdated songs, which would drive the engagement even lower


We needed a system that is independent and continually indexes newer songs, we also realised that the system being only dependent on a single platform will result in server overloading, so we wanted this system to depend on multiple audio platforms, where new platform bindings can easily be added


## How it works?
To achieve this, we relied on a system which consists of two sub services, a recognition engine, and a web crawler,
ideally the system would crawl audio files, fingerprint them and index them, into a large dataset which could then be used for recommendation's and analysis,
however the content on these platforms is not 100% music, it consists of diverse  audios, and Yebr had to be smart enough to identify these, and process them individually, for this we added multiple layers of filtering, based on schematics and ai models, which would idently and classify these audios,

> Infographic: https://research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/infographic.html

## Recognition Engine
We looked for multiple options for Ai recognition engine, we wanted somthing like shazam's fingerprinting algorithim, which will allow us to convert audio clips, into a hash-like format
the recogniton engine relies on a MySQL database to store these hashes, 

Initially the recognition engine would fingerprint and store all of the content indexed by the crawler, however we soon realised that content library on platforms like Youtube is very diverse, containg not only music, but also podcasts and regular videos, these would be indistinguishable to our system which would fingerprint and index these, we needed some way to sub classify these audio's in predifened classes, to allow class based processing of different audios, to do this we relied on Youtube's 8 Million dataset, which contained hundreds of predifened classes, this tagged content helped us to avoid resource intensive computation of audios like podcasts, which will only be a fraction of Yebr's index, and would not cause system overloading even if they we're only available on a single source, not only that, fingerprinting podcasts would is inheritly harder because of their inconsistent highs and lows (referring to a spectrogram)
![Knowledge graph](https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/41598_2021_96446_Fig1_HTML.png "Knowledge graph")

## Crawler
Our crawler consisted of a shell based architecture, where a base API is provided, and bindings for other platorms can be added as code plugins. 
The crawler uses Apache cassandra to store and retrive crawl lists, and queues, and a cron trigger is used to queue crawls to the recognition service, where it is added to the permentant Yebr song database. Each crawler plugin is supposed to find its own lists, and is responsible for its structured item response, i.e the song or video.

## Conclution
PENDING

