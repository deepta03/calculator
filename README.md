# calculator

A web-based calculator built using HTML, CSS, and JavaScript. This project demonstrates core programming skills including DOM manipulation, control flow, event handling, and state management.

## About
  
I've always wondered why most—if not all—calculators follow a descending digit layout, with 7 8 9 on the top row and 1 2 3 at the bottom. After a bit of research, I discovered that this layout was originally designed to make calculations faster on early physical "adding machines" and has remained the standard for calculator keypads for over a century.

So, I decided to redesign it by rearranging the digits so that it follows the natural ascending order of numbers (1 to 9 from top to bottom), and kept 0 at the bottom as usual. The idea was to make it more intuitive for users as we are used to reading numbers in that sequence.

For the UI, I kept things minimalist: a soft, light color with basic, clean button designs.

On the logic side, the calculator was built completely from scratch using own custom functions to evaluate expressions safely and predictably —without the use of eval() or new Function() due to potential security risks. It was more challenging, but also more rewarding, and gave me a much deeper understanding of how real calculators process input behind the scenes.

## Usage

To use the calculator, click on the digit and operator buttons to build your expression. After entering a number and an operator, input the second number. You can either press the `=` button to display the result or continue by pressing another operator — in that case, the calculator will automatically evaluate the current expression, and display the result and use it as the first number for the next operation. This allows for smooth chaining of multiple calculations without needing to press `=` each time.

The `AC` button resets the calculator completely, clearing all input, stored values, and the display.

The `Del` button removes the last digit **only while entering numbers** (either the first or second operand). It does **not** affect the result after pressing `=`, nor does it work when an intermediate result is displayed during chained operations.

Decimal input is supported. The calculator also includes full **keyboard support** for a more seamless experience:
- Press `Backspace` to delete the last digit (same as `Del` button)
- Press `c`, `C` or `Escape` to clear everything (same as `AC` button)
- Use number keys (`0–9`), operators (`+`, `-`, `*`, `/`), and the decimal point key (`.`)
- Press `Enter` to perform calculations