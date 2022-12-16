const ethers = require('ethers');

const RPC_SERVER='HTTP://192.168.8.88:8545';
const PRIVATE_KEY='02068f420a2391dabeb91fa879d5dcb4212719dace9d60412ecd3810a39cb8fa';


async function main() {
    console.log("Hello from main()!");
    const provider = ethers.providers.JsonRpcProvider(RPC_SERVER);
    let block_number = await provider.getBlockNumber();
    console.log('Block number:${block_number}');
    
}

main().then(()=>{
    console.log("main() finished and retruned.");
}).catch((err)=>{
    console.log(err);
})