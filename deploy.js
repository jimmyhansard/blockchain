const ethers = require('ethers');

async function main() {
    console.log("Hello from main()!");
    const provider = ethers.providers.JsonRpcProvider();
    
}

main().then(()=>{
    console.log("main() finished and retruned.");
}).catch((err)=>{
    console.log(err);
})