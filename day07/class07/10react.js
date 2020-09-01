    	var n=Math.random();
    	
    	let myStyle={
    		fontSize:50,
    		color:"red"
    	}
    	
    	let arr=[
    		<h1>aaa</h1>,
    		<h2>bbb</h2>,
    	]
    	
    	
    	let ele=<div className="box1">
    		<div>
    		
    			随机数:{n}
    			<div data-name="kky" attrname="abc">2</div>
    			{/*这是JSX注释*/}
    			<div style={myStyle}>看看我的样式</div>
    		</div>
    	</div>
      ReactDOM.render(
        ele,
        document.getElementById('root')
      );