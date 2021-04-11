# tim.clifford.lol

This repo contains the source code for
[tim.clifford.lol](https://tim.clifford.lol). It's based heavily on
[draculatheme.com](https://draculatheme.com)

## How does it work?

It uses [Next.js](https://nextjs.org/), a React framework that does static
exporting. It is hosted on the [SRCF](https://srcf.net)

## Getting Started

1. Install [NodeJS](http://nodejs.org/download/), if you don't have it yet.

2. Now clone this repository:

    ```sh
    $ git clone https://github.com/tim-clifford/tim.clifford.lol.git
    ```

3. Then go to the project's folder:

    ```sh
    $ cd tim.clifford.lol
    ```

4. Install all dependencies:

    ```sh
    $ npm install
    ```

5. Generate a [GitHub Personal Access Token](https://help.github.com/en/enterprise/2.17/user/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) with `repo` permissions and create a `.env` file containing this variable.

    ```sh
    GITHUB_PERSONAL_ACCESS_TOKEN=cdf5fa84cc07c2ea66fae8f2140118c9e9fa4f55
    ```

6. And finally run:

    ```sh
    $ npm run dev
    ```

Now you can see the website running in `localhost:3000` :D

## License

[BSD 3-Clause License](./LICENSE) © Tim Clifford

Many parts are taken from [draculatheme.com](https://draculatheme.com), which
is licensed according to [LICENSE.dracula](./LICENSE.dracula)
