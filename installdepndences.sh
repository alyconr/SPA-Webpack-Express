#!bin/bash

echo "Installing dependencies"
echo "Installing @lhci/cli"
npm install -g @lhci/cli@0.7.x
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Installing stylelint"
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Installing eslint"
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Installing Webpack"
npm init -y
npm install webpack webpack-cli --save-dev
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Installing Webpack Dev Server"
npm install webpack-dev-server --save-dev
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Install Webpack CSS loader"
npm install style-loader css-loader --save-dev
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Install Webpack HTML loader"
npm install html-loader --save-dev
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Install Webpack plugin"
npm install html-webpack-plugin --save-dev
if [ $? -ne 0 ]; then
    echo "Dependencies installation failed"
    exit 1
fi
echo "Dependencies installed successfully"

echo "Install css-minimizer
