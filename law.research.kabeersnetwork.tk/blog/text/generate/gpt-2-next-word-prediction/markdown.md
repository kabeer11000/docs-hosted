# Next Word Prediction

Deep neural transformer architecture (TA) systems can be considered the successors to LSTM (long, short-term memory) networks. TAs have revolutionized the field of natural language processing (NLP). Unfortunately, TA systems are extremely complicated and implementing a TA system from scratch can take weeks or months.

This article describes using a Generative Pretrained Transformer 2 (GPT-2) for Language Modeling using the hugging face and tensorflow

“Machine learning with PyTorch can do amazing . . ”

The built-in model predicted the next word is “things” which seems reasonable.



The documentation example wasn’t very good in my opinion because instead of predicting the single, most likely word, the example fetched all possible words (50,257 of them) did some complicated filtering using the HF top_k_top_p_flitering() function, then fed those filtered results to the PyTorch multinomial() probability distribution function, and selected one highly-likely, but not necessarily most-likely, result. My point is that the documentation example had too many clever bells and whistles which obscured the main ideas of the next-word prediction.

Note: The system doesn’t really predict a next “word” — it’s more correct to say the model prediction is a “token”. For example, the tokenizer breaks the word “PyTorch” into “Py”, “Tor”, and “ch” tokens.

Even though the documentation example was short, it is extremely dense. Every statement has many nuances and ideas. Parsing through the documentation example took me a full day, and there are still some details I don’t fully understand. But it was good fun and the adventure took me one step closer to a working knowledge of the HF library for transformer architecture systems.


## A Next Word Prediction Library
https://github.com/kabeer11000/next-word-prediction

### How to use
```python
>>> from next_word_prediction import GPT2
>>> gpt2 = GPT2()
>>> text = "The course starts next"
>>> gpt2.predict_next(text, 5)
The course starts next ['week', 'to', 'month', 'year', 'Monday']
```

## Demo via Streamlit

```bash
streamlit run app/run.py
```
