from flask import Flask, render_template, request, jsonify
from transformers import MT5ForConditionalGeneration, T5Tokenizer
import torch

app = Flask(__name__)

# Load model and tokenizer
model_path = "model"  # path to your model
tokenizer = T5Tokenizer.from_pretrained(model_path)
model = MT5ForConditionalGeneration.from_pretrained(model_path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    input_text = request.json.get('input_text', '')
    if not input_text.strip():
        return jsonify({'summary': 'Input is empty.'})

    # Tokenize and summarize
    inputs = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)
    summary_ids = model.generate(inputs, max_length=150, min_length=10, length_penalty=2.0, num_beams=4)
    output_text = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

    return jsonify({'summary': output_text})

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
