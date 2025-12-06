# Bangla Summarizer

[![License](https://img.shields.io/github/license/kawshik-ornob8/bangla_summarizer)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/kawshik-ornob8/bangla_summarizer)](https://github.com/kawshik-ornob8/bangla_summarizer/issues)
[![GitHub stars](https://img.shields.io/github/stars/kawshik-ornob8/bangla_summarizer)](https://github.com/kawshik-ornob8/bangla_summarizer/stargazers)

---

## Overview

**Bangla Summarizer** is a powerful open-source tool designed to generate concise summaries from Bangla (Bengali) text. It leverages advanced Natural Language Processing techniques to make lengthy content accessible and easier to understand, supporting educators, students, researchers, and general users in their day-to-day tasks with Bangla language documents.

The summarizer supports easy integration as a Python library and offers a straightforward command-line interface for quick usage.

---

## Features

- **Automatic Summarization of Bangla Text:**  
  Create short, meaningful summaries from long Bangla articles, documents, and input files.

- **Python API and CLI Support:**  
  Use as a Python module in your projects or run directly from the command line.

- **Customizable Output:**  
  Adjust summary length according to needs.

- **Open Source:**  
  Free for commercial and personal use.

---

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Setting Up Virtual Environment](#setting-up-virtual-environment)
- [How to Run](#how-to-run)
  - [Command Line Interface (CLI)](#command-line-interface-cli)
  - [Python API Usage](#python-api-usage)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Support](#contact--support)
- [Acknowledgements](#acknowledgements)

---

## Requirements

- **Python 3.10** (Strictly required)
- `pip` for package management
- Recommended: Use a virtual environment to avoid dependency conflicts

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kawshik-ornob8/bangla_summarizer.git
   cd bangla_summarizer
   ```

2. **[Recommended] Setting Up Virtual Environment**

   Setting up a virtual environment ensures your dependencies are isolated and compatible.

   **On Windows:**
   ```bat
   python3.10 -m venv venv
   venv\Scripts\activate
   ```

   **On macOS/Linux:**
   ```bash
   python3.10 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies**

   Make sure virtual environment is activated, then:

   ```bash
   pip install -r requirements.txt
   ```

---

## How to Run

### Command Line Interface (CLI)

You can summarize a Bangla text file directly with the CLI tool.

**Basic Usage:**
```bash
python main.py --input path/to/input.txt --output path/to/summary.txt --length 100
```
- `--input`: Path to your Bangla text file.
- `--output`: Path where the summarized output will be saved.
- `--length`: Desired maximum length of the summary (number of words or sentences, depending on implementation).

**Example**  
```bash
python main.py --input sample_bangla.txt --output summary.txt --length 100
```

### Python API Usage

You can also integrate Bangla Summarizer into your own Python scripts or applications.

```python
from bangla_summarizer import summarize

bangla_text = "বাংলাদেশ দক্ষিণ এশিয়ার একটি দেশ। এটি একটি সুন্দর প্রকৃতির দেশ..."
summary = summarize(bangla_text, max_length=100)
print(summary)
```
- `summarize`: Main function to generate the summary.
- `bangla_text`: String containing Bangla text to summarize.
- `max_length`: Integer specifying the desired summary length.

---

## Examples

**Input Sample**
```
বাংলাদেশ দক্ষিণ এশিয়ার একটি দেশ। এটি একটি সুন্দর প্রকৃতির দেশ যেখানে বহু নদীনালা প্রবাহিত...
```
**Output Sample**
```
বাংলাদেশ দক্ষিণ এশিয়ার একটি সুন্দর দেশের পরিচয় তুলে ধরা হয়েছে।
```

---

## Project Structure

```
bangla_summarizer/
  ├── main.py                # CLI entry point
  ├── bangla_summarizer/     # Core functionality package
  ├── requirements.txt       # Project dependencies
  ├── README.md              # Documentation
  ├── LICENSE                # Open source license info
  └── tests/                 # Unit tests (optional)
```

---

## Contributing

Contributions and feedback are welcome!  
To contribute:

1. Fork the repo and create your branch (`git checkout -b feature_branch`)
2. Commit your changes (`git commit -m 'Add new feature'`)
3. Push to the branch (`git push origin feature_branch`)
4. Open a Pull Request on GitHub

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License.  
See [LICENSE](LICENSE) for details.

---

## Contact & Support

- **Issues or Bug Reports:**  
  Please use the [GitHub Issues](https://github.com/kawshik-ornob8/bangla_summarizer/issues) page.

- **General Contact/Questions:**  
  You may contact the repository owner via GitHub.

---

## Acknowledgements

- All contributors and open-source projects that inspired or supported this repository.
- The Bangla NLP community for datasets, tools, and algorithmic advances.

---

**Empowering Bangla readers and writers with smarter text summarization.**
