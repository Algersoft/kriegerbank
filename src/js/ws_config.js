var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'KriegerBank';
config.appDescription = 'Krieger Bank for Kriegerrand';
config.appSlogan = 'We wont ask what you will use it for!';
config.appId = 'com.kriegerrand.kriegerbank';
config.appGitRepo = 'https://github.com/Algersoft/kriegerbank';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 18666;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'krg';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'kriegerrand-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.10.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://xyz.kriegerrand.com/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '3.86.240.228:19666';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '3.86.240.228:19666',
];

// your currency name
config.assetName = 'Kriegerrand';
// your currency ticker
config.assetTicker =  'KREGR';
// your currency address prefix, for address validation
config.addressPrefix =  'ZkRiEGER';
// standard wallet address length, for address validation
config.addressLength = 102;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 190;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 1000000;
// to represent human readable value
config.decimalPlaces = 6;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Test',
      address: 'ZkRiEGER9iYYDmRLZfdjxJLv88fuJLrEc7fUvYR59rQzPnLkfehAwR1ZkKgNLrcKb61xsUFurfWejZm24ayQiUdR1jNqiNvFKTs6xV',
      paymentId: '', 
    },
    { name: 'Pool',
      address: 'ZkRiEGER7NNfkVk38utBc4isHgcRVMtTAA42T9fZmd8ad7czKHG3X758YP8sKBmsCePJDF66n56n3NyomzRQiFbAdGkeVZHPKsX1Rx',
      paymentId: '', 
    },
    { name: 'DrKrieger',
      address: 'ZkRiEGERJVdcqA3ZmeDRDoKX11y1S6YzX1cUbB4Xd3o9GAEHNPKC9FaBxbKegTf14J6NYcyBVKjZaW96YRr6T3ZEERFBagYsqH11xd',
      paymentId: '', 
    }
];

module.exports = config;
