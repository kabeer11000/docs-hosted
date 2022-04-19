# Oscillator, Filter, Amplifier, Envelope, and LFO

**Oscillator**

The oscillator (or VCO, voltage-controlled oscillator) is essential to any
synthesizer as it is the module that generates the sound according to
a waveform. The waveform is specified as a parameter and shapes
the timbre of the sound. The most common waveforms are Sine,
Sawtooth, Square, Triangle and Noise.

-^ **Sine Wave** – Energy at a single frequency. Sounds like a single
    tone that stays even throughout.
- **Saw Tooth Wave** – A brighter more vibrant sound as caused by the
    introduction of upper melodic partials.
-^ **Square Wave** – Generates a hollow sound as caused by the
    missing even upper partials. Square wave only contains odd
    harmonic partials.
- **Triangle Wave** – Similar to the square wave. However, the upper
    partials seem to disappear (roll-off) faster than that of a square
    wave.
- **Noise Wave** – Energy distributed across the frequencies resulting in
    a sound like that of what you here when the television cable is out.


**Filter**

The most commonly-used filter is the low-pass filter (LP in phasex), as
synth waveforms tend to be very “bright”. Other common filters include
the high pass (HP), band pass (BP), notch and comb. The cutoff
frequency and resonance are important parameters in a filter. The
cutoff frequency is exactly what it sounds like, the frequency at which
the filter decreases the level of the signal. The resonance is the level
of the frequency at the cutoff frequency, often used to make a peak at
the frequency that allows in additional harmonics to the sound.

- **Low Pass Filter** – From the name, allows the low frequencies to
    pass through. And this is actually good since sounds produced by an
    oscillator tend to be very bright and brilliant. A Low Pass Filter evens
    out the perceived spectrum by cutting the highs.
- **High Pass Filter** – From the name, allows the high frequencies to
    pass through.
- **Band Pass Filter** (Notch Filter) – This filter allows a range of
    frequencies to pass through. Filter plugins usually have a knob that
    allows the user to set a range of what frequencies can only pass
    through.
- **Comb Filter** – A special kind of filter that adds a delayed version of
    the signal to itself, resulting in a cancellation of frequencies. Filter
    shape resembles that of a comb.


**Amplifier & Envelope**

The amplifier acts as a preamp for the signal. Amplifiers typically
include an ADSR envelope to further shape the sound. ADSR stands
for the attack, decay, sustain and release parameters of an envelope.

- **Attack** – the amount of time for the note to reach it’s full
    power
- **Decay** – the amount of time it takes for the note to reach it’s
    sustain level from the highest point
- **Sustain** – the level at which the note holds
- **Release** – the time it takes for the note to fade out


## LFO

The LFO (low frequency oscillator) is another type of oscillator that
oscillates in a frequency range below that of human hearing. As such,
the LFO is not used to generate sounds but to modulate them, often
used to create a vibrato or tremolo-like sound.

LFO shapes:

- Triangle^
- Sawtooth Up^
- Sawtooth Down^
- Square^
- Random (Noise)


