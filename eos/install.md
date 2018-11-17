# EOS 安装
EOS 编译安装

    git clone https://github.com/EOSIO/eos --recursive
    git submodule update --init --recursive

    cd eos
    ./eosio_build.sh

    cd build
    sudo make install

错误一：

  CMake Error at libraries/wasm-jit/Source/Runtime/CMakeLists.txt:26 (find_package):
    Could not find a package configuration file provided by "LLVM" (requested
    version 4.0) with any of the following names:

      LLVMConfig.cmake
      llvm-config.cmake

    Add the installation prefix of "LLVM" to CMAKE_PREFIX_PATH or set
    "LLVM_DIR" to a directory containing one of the above files.  If "LLVM"
    provides a separate development package or SDK, be sure it has been
    installed.

    -- Configuring incomplete, errors occurred!
    See also "/Users/taofeng/Github/eos/build/CMakeFiles/CMakeOutput.log".

    >>>>>>>>>>>>>>>>>>>> CMAKE building EOSIO has exited with the above error.

解决办法：

    export LLVM_DIR=/usr/local/Cellar/llvm\@4/4.0.1/lib/cmake

错误二：

    /Users/taofeng/Github/eos/contracts/libc++/upstream/include/wchar.h:119:15: fatal error: 
          'wchar.h' file not found
    #include_next <wchar.h>

解决办法：

  使用最新的eos代码和module代码

    cd /path/to/eos
    rm -rf /path/to/eos/build
    git pull
    git submodule update --init --recursive
    ./eosio_build.sh

错误三：

ld: symbol not found

解决办法：更新系统和xcode，重新编译


