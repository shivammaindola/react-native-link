import SecureKeystore from 'react-native-secure-keystore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAvailable: false, ready: false };
  }

  async componentDidMount() {
    try {
      const isAvailable = await SecureKeystore.isAvailable();
      this.setState({ isAvailable, ready: true });
    } catch (ex) {
      console.log('Error = ', ex);
    }
  }

  render() {
  console.log('notWRROR = ');
  }
    // Do something with this.state here

}