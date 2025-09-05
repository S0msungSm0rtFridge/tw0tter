function FormatDateTime({datetime}){
    return new Date(datetime).toLocaleString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true, month: 'short', day: 'numeric', year: 'numeric'}); 
}

export { FormatDateTime };