# cleos

## 指定endpoint

    cleos -u http://api-direct.eosasia.one <other command>

## 修改权限

    cleos set account permission xxxxxaccount active '{"threshold": 1,"keys": [{"key": "EOS...","weight": 1}],"accounts": [{"permission":{"actor":"xxxxxaccount","permission":"eosio.code"},"weight":1}]}' owner -p xxxxxaccount

## 部署合约

    cleos set contract xxxxxaccount </path/to/contract/dir> -p xxxxxaccount
    cleos set code xxxxxaccount </path/to/code/file.abi>  -p xxxxxaccount
    cleos set abi xxxxxaccount </path/to/abi/file.wasm>  -p xxxxxaccount

## 购买资源

    cleos system buyram eosio xxxxxaccount "20.0000 EOS"  -p xxxxxaccount
    cleos system delegatebw eosio xxxxxaccount "10.0000 EOS" "0.5000 EOS"  -p xxxxxaccount

## 创建账号

    cleos system newaccount xcreatoracct yyyyynewacct EOS8cgtXLQLtAzRyNytCLdvZGMaixKrt9nmoUkBY4MfULriSg4Uzo EOS8cgtXLQLtAzRyNytCLdvZGMaixKrt9nmoUkBY4MfULriSg4Uzo --stake-net "10.0000 EOS" --stake-cpu "10.0000 EOS" --buy-ram-kbytes 10

## 转账

    cleos transfer fromaccount toaccount "1.0000 EOS" "this is transfer memo"

## 发送交易

    cleos push action tocontract someaction '[<paramater list>]' -p someaccount

## 获取 abi/wasm

    cleos get abi somecontract
    cleos get code --wasm somecontract -c somecontract.wasm

## 获取table

    cleos get table [OPTIONS] contract scope table

## 获取transaction

    cleos get transaction -b blocknum <TRANSACTION_HASH>

## 导入私钥

    cleos wallet import --private-key 5K5rvrLPKP9tNkLngX9vJcLDYeh6nAurakb2Xwc2CpaRaAwazZ4

## 解锁wallet

    cleos wallet unlock