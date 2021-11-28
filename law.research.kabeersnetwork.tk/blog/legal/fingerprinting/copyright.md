# Could music fingerprinting be copyright infringement?

Music fingerprinting is the process of extracting essential information from digitized audio recordings (e.g. CD tracks) so it can be searched in a database. Typically a large database is compiled of known recordings and then the database is searched for fingerprints of unknown audio samples. When a match is found, the previously unknown audio sample can be identified reliably. Music fingerprinting has a lot of applications, some of them are:

*   Song identification services like Shazam. The user can record a small sample of a song (played on the radio or as background music in a shop) using a mobile phone, which is then fingerprinted. The server matches this fingerprint against a database of fingerprints of known songs. Then the server provides the artist and song title, so the user can purchase a CD of that song.
*   Automatic royalty collection from radio stations. Songs played by a radio station are fingerprinted and then identified automatically.
*   Filtering of infringing audio from file sharing services of video sites like Youtube.

Music fingerprinting is big business, but entry into the market with independently developed software (not just buying one of the existing solutions) is not simple. And this is a gross understatement. There are several reasons why it is so hard to enter the market:

*   Music fingerprinting algorithms are patented and optimizations of these algorithms in existing applications are protected by trade secrets. One must first negotiate a license for all relevant patents and then one has to spend much time to develop the software, also tuning the algorithm for best matching capabilities as these aspects of existing applications are protected by trade secrets. It may be possible to write an algorithm that does not use any of the patented technologies.
*   Real life applications of audio fingerprinting require a huge database of fingerprints of (nearly) all recorded music. Shazam has a database of 8 million songs (the equivalent of more than half a million CDs). Before you can compile this database, you need access to the recordings in the first place. Although it is certainly possible to create fingerprints of recordings without making intermediate copies, it is much easier to do it when you can make intermediate copies, especially if the process of fingerprinting must be repeated later. But in most countries these copies cannot be made without permission.
*   When you decide to improve the fingerprinting method, you have to repeat the entire fingerprinting process for all recordings.
*   The format of fingerprints is not standardized (not even publicly documented). Therefore you cannot buy just the database of fingerprints and use it with your own application.
*   The copyright status of music fingerprints themselves is unclear. This risk can be mitigated though.

This article focuses on the copyright implications of music fingerprinting.

## How music fingerprinting works

Landmark Digital Services LLC owns several patents on music fingerprinting, two of them are:

*   System and methods for recognizing sound and music signals in high noise and distortion [United States Patent: 6990453](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=6990453.PN.&OS=PN/6990453&RS=PN/6990453)
*   Robust and invariant audio pattern matching [United States Patent: 7627477](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7627477.PN.&OS=PN/7627477&RS=PN/7627477)

[This article](http://laplacian.wordpress.com/2009/01/10/how-shazam-works/) by Bryan Jacobs describes how the matching algorithm in Shazam works. [Here](http://labrosa.ee.columbia.edu/~dpwe/resources/matlab/fingerprint/) is an explanation of the music fingerprinting and matching algorithm that is accompanied by a Matlab implementation. Finally Roy van Rijn in The Netherlands created a rough implementation of a music fingerprinting program in Java as described [here](http://www.redcode.nl), but is unable to post the source code due to patent threats. Yet I will use the published details of his program as an example to illustrate the process.

The fingerprinting operation of an audio sample consists of the following steps.

*   Sampling the audio in mono. The example program used a sampling frequency of 44100Hz and 8 bits resolution.
*   Dividing the audio into sections to be FFT-processed. The example program used sections of 4096 samples, or 11 sections per second.
*   Converting each section to the frequency domain using FFT.
*   Selecting the 'landmark' points in the spectrogram. The patents suggest many options for these, but the example appication picks the frequency with the highest amplitude in several frequency bands (four in this example). So four frequencies are picked. Thus for each section there is a tuple of 4 small integers that represent the highest-amplitude frequencies in their respective bands. Only low frequencies (say less than 2kHz) are taken into account.
*   Each section yields a single 'fingerprint', which is a hash value constructed from the 4 integers described above. In the example application this is a value that contains about 22 bits of information.
*   So the fingerprint of the entire sample is the sequence of the fingerprints of their sections. This yields a data stream of around 250 bits/s.

This is only the fingerprinting operation itself. What is yields is a sequence of hash values, which do in fact represent dominant frequencies in the spectrum at a certain instance of time. This finding will be crucial in a later part of this article.

So let's briefly sketch the matching process. The unknown audio sample and the known recording that we want to identify are usually not aligned in time. The sample may be taken from the middle of a song. The unknown sample is usually not aligned a whole number of sections with respect to the known recording. So the spectral information from a single section of one sample will be divided over two sections in the other sample. This will cause most hash values not to match exactly. Distortion and noise also cause the number of exactly matching hash values to decrease. Yet there are typically enough matching hash values to reliably identify a song from a 10s sample. For this we are not interested in the number of matching hash values as such, but in the number of time consistent hash values. Suppose that the hash value 1 second from the start of the sample matches the hash value 20 seconds from the start of the song. When the hash value 2.5 seconds from the start of the sample also matches the value 21.5 seconds from the start of the song, this is a time consistent match with respect to the first match. If the hash value at 5s into the sample again matches the sample at 24s into the song, this adds one more time consistent match to the set. A match at 6s into the sample with the hash at 40s into the song would not be time consitent with the rest of the set. The song with the largest set of time consistent matches is the one identified.

The example program is a very crude implementation of fingerprinting. It chops the audio signal into fixed sized sections and takes a fingerprint of each section. The patents suggest that fingerprints should be taken at variable points in time which are determined by the content of the signal. Therefore the time must be stored with each fingerprint. In the example application, timing information is only implicit in the order of the sequence of hash values. The matching process can then be reduced to fuzzy substring matching, i.e. finding a sequence of hash values that agrees in as many positions as possible but with disagreeing points in between. This approach may even avoid infringing some patent claims.

## From recording to fingerprint

Assuming the file fingerprints are themselves unencumbered by copyrights, can we create them without copyright infringement? Yes we can, but it takes some care.

Before you can fingerprint a recording, you need to obtain access to it in the first place. The Shazam catalog holds 8 million songs, which is an estimated 600 thousand CDs. This is indeed a huge number. How would you ever hope to compile a large fingerprint catalog and do it legally? There are several options:

*   Purchase the recordings on CD. This is expensive and not all CDs are available right now. Be prepared to purchase a lot of material on the used market and completing your catalog may take years. Once you have purchased this huge collection of CDs, it takes up a lot of space and handling these CDs involves a lot of work. If you are absolutely sure you will never need them again, you can try to sell the CDs again.
*   Purchase the entire iTunes catalog. Also expensive (especially if you purchase the DRM-free tracks). But once you have done that, the tracks are right on your hard disk and the fingerprinting process can be fully automated. Your iTunes client will run out of steam long before you have downloaded the entire collection, so you need to spread out the work over many computers, each with its own iTunes instance. There is no way you can ever resell the purchased tracks.
*   Purchase access to the entire catalogs of major record labels. I guess this is what Apple iTunes and Spotify do. No doubt this costs a lot of money as well, but less than buying the CDs. And you do not have the hassle of storing and handling physical CDs. Of course you need to negotiate with the record labels and convince them that what you do is valuable to them.
*   Borrow CDs from libraries. This is much cheaper than buying them and libraries have many out-of-print titles, but what if you are limited to five CDs per week?
*   Let your customer do the job. If your customer is a record label that needs its catalog fingerprinter, this is the way to go.
*   Let the crowd do the job, a bit like how cddb (CD Database) works. Users of your software can fingerprint their own CDs and send the fingerprints to your central server. This would in fact be great for an open source music fingerprinting service. The user community will not repeat the job over and over again, so you natching algorithm should be perfect the first time.

If your goal is to have a complete music catalog, no single method will get you all recordings and obtaining that many recordings takes lots of time anyway. Some recordings may only be available in analog formats or DRM-protected digital formats.

Once you have all the recordings in one way or another, you need to fingerprint them. You have two options:

*   Fingerprint them on-the-fly. Read the recording one small block at a time (just enough to perform the FFT on a single section) and fingerprint each section as you read it. No copy of a complete song (or even a significant portion of it) is ever made. Therefore you do not run into trouble with copyright infringement. You can do this with physical CDs faster than in real time. Analog recordings have to be played though the line input of your sound card in real time. As they are sampled from the line input, they can also be fingerprinted on the fly. DRM-protected material must be treated as analog recordings.
*   Make an intermediate copy. Handling the physical CDs or messing with analog inputs needs only be done once. When you have the intermediate copies you can perform the fingerprinting process fully automatically. Improvements to the fingerprinting algorithm can be done at little cost. For a large catalog (8 million songs, 5MB each in MP3) the intermediate copies take up a lot of hard disk space (40TB in this case).

However, in many countries intermediate copies cannot be made without permission. In the USA this is probably permissible as fair use. In the Netherlands a private person may make copies for personal use, but for business use a license is probably required. In the UK a license is certainly required. This may be obtainable from the relevant copyright collecting society (PRS for Music in the UK). In most cases the license to make and keep intermediate copies will be conditional on possession of the original recording. This is also true for the fair use permission to make copies in the USA. So you may store a copy of a physical CD on your hard disk, but you are obliged to keep the original CD, even though you will never handle it again. It is probably not allowed to keep copies of CDs borrowed from libraries.

## Are the fingerprints themselves derivative works?

The main question of this article: are the fingerprints themselve encumbered by copyright? Must a fingerprint be viewed as a derivative work, a modified reproduction of the original work for which permission is required? This is not an easy question to answer and the answer may depend on technical details of the fingerprinting process itself.

As long as a fingerprint is only a fingerprint that helps uniquely identify an item, but it conveys no other information about the item, it can be considered unencumbered by copyright. An examples of such a fingerprint would be the MD5 hash of a complete file. We cannot derive any information of the contents of the file from its MD5 hash. But music fingerprints are different.

As discussed earlier, the fingerprint of a recording is a sequence of hashes, each of which represents the dominant frequencies in the spectrum at a certain time instant. The dominant frequency is roughly equivalent to the pitch of the note being played and a sequence of note pitches is roughly equivalent to a melody. A melody is copyrighted! It is likely that a recognizable melody can be extracted from the fingerprints in the example case, at least for a significant fraction of the recordings. It would be nice to implement the first steps of the fingerprinting process described by Roy van Rijn. Instead of using the dominant frequencies to make a fingerprint, you can construct a spectrum with just these frequencies at a constant amplitude and convert it back to the time domain with FFT. Now you can hear for yourself whether there is a recognizable melody, even when using a trivial method to extract it.

The fingerprinting algorithms used by commercial programs are of course different from the example. But they are essentially capturing significant points in the spectrogram, which roughly translate to pitch at a specific time. Points that are relevant for recognizing a recording are probably also helpful for recognizing a melody. Al long as a hash value can be translated back into spectral components, melody information can be extracted from the fingerprint.

There are three possible solutions to the problem:

*   Consider the fact that the possibility to extract melody information from the fingerprint works imperfectly, is only incidental and is not the intended purpose of the fingerprint. Therefore these fingerprints should not be considered copyright infringement. In the USA this case would easily meet the criteria for fair use, but in many European countries this is a grey area.
*   Consider the fingerprints copyrighted derivative works and negotiate a license to make additional copies of the songs. If you already have a license to make intermediate copies of the recordings and you use the fingerprint database only internally, you may already be covered or you may be covered at a slightly higher fee. If you want to distribute copies the fingerprint database to customers however, permission to do so would be much harder to get and more expensive.
*   Make it infeasible for melody information to be extracted from fingerprints. The less realistic it is to extract copyrighted elements from your fingerprint, the stronger your case that it is not a copyrighted derivative work.

There is a way to make it much harder to extract melody information from music fingerprints. Consider the example program. Each hash consist of four small integers that together can be represented by 22 bits. There are about 4 million different hash values. As long as the hash values can be converted back to the orignal spectral patterns, melody extraction is easy. Instead of using a one-to-one mapping use a many-to-one mapping as the hash function. Instead of a 22 bit number it yields a 20 bit number; the mapping has 1 million possible outputs for 4 million possible inputs. This must be a highly nonlinear hash function, so each hash value can be the result of four totally unrelated spectral patterns.

A sample of 10 FFT sections (less than 1 second in duration). can now be the result of 1 million combinations of spectral patterns (2 bits of uncertainty per section). As not all spectral patterns are equally likely and certainly not all spectral patterns are equally likely given the previous spectral patterns, it may still be possible to guess the most likely sequence, but by throwing away 2 bits per hash we certainly made the melody extraction job much harder. We have reduced the reliability of the matching process, but only slightly. Any hash that would match in the original algorithm, would still match. We only introduce a few false matches (pattern A in the sample matches pattern B in the reference recording), but these false matches occur only rarely.

So we may conclude that by throwing away a small amount of fingerprint information we can dramatically increase the diffuculty to extract meaningful information from it, while only slightly affecting the reliability of the matching process.