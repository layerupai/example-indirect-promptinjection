## Indirect Prompt Injection Vulnerability Demonstration for educational purposes 

### Overview
This project demonstrates an indirect prompt injection vulnerability in Leap, an LLM (Large Language Model) workflow builder. We've created a dummy website titled "Urban Gardening Insights" to showcase how seemingly benign content can be manipulated to exploit LLMs into executing unintended actions.

### Vulnerability Description
Indirect prompt injection occurs when an LLM, such as those integrated within Leap, processes input that includes hidden instructions or prompts. These hidden prompts can manipulate the model's output, causing it to perform actions that were not intended by the legitimate user or the system's designers.

In this demonstration, the index.html file contains a hidden div (#hiddenPrompt) with a styled instruction that is invisible to the human eye but can be processed by an LLM. This instruction manipulates the model into ignoring the legitimate content of the website and focusing solely on the hidden message, which could lead to unintended or malicious outcomes.

### Demonstrating the Vulnerability for educational purposes

<div>
    <a href="https://www.loom.com/share/e1668873fa1548bdaa16d9df385c87ef">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e1668873fa1548bdaa16d9df385c87ef-with-play.gif">
    </a>
  </div>

### Prevention and Mitigation
Addressing indirect prompt injection vulnerabilities requires a multifaceted approach, including but not limited to:

* Sanitizing and validating input to detect and remove hidden instructions.
* Employing robust content moderation tools and techniques using cybersecurity products like Layerup.
* Designing LLMs to recognize and ignore potentially malicious hidden prompts.

### Conclusion
This project highlights the importance of considering indirect prompt injection vulnerabilities in LLMs. By understanding and addressing these vulnerabilities, developers can create more secure and resilient systems.

### Disclaimer
This project is for **demonstration purposes only** to help the cybersecurity community learn more about such vulnerabilities as they're integrating LLMs in their systems. 
