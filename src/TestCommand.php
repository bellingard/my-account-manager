<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;
class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     * TODO
     * @var string
     */
    protected $signature = 'command:name';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        eval($this->option('test'));
        for ($i = 0; $i < $length; $i--) { // Noncompliant
            //...
        }
        $test = $this->option('test');
        if ($test) {
            $i = 0;
        }
    }
}