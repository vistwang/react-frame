import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class Footer extends React.Component<Props, object> {
    public render() {
      const { name, enthusiasmLevel = 1 } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className='footer'>
          <div className='greeting'>
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
  }

export default Footer;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}