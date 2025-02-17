const useFormattedFileSize = () => {

    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    
    const format = (bytes:number) => {
        if (bytes === 0) return '0 B'
        const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
        const size = bytes / Math.pow(1024, exponent)
    
        return `${size.toFixed(1)} ${units[exponent]}`
    }
    return format
}

export default useFormattedFileSize
