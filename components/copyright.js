var React = require('react');
var ReactDOM = require('react-dom');


class Copyright extends React.Component { 
    render() { 
        <p class="m-0 text-center text-white">
          Copyright &copy; Eternal Kings MC <script type="text/javascript">
            document.write(new Date().getFullYear());
          </script>
        </p>
    }
}

export { Copyright };



