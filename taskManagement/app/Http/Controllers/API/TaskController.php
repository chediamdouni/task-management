<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\Task as ResourcesTask;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class TaskController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // fetch all tasks 
        $tasks = Task::all();
        return $this->sendResponse(ResourcesTask::collection($tasks), 'Tasks Retrieved Successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required',
            'priority' => 'required',
            'date' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $task = Task::create($input);

        return $this->sendResponse(new ResourcesTask($task), 'task Created Successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::find($id);
  
        if (is_null($task)) {
            return $this->sendError('Task not found.');
        }
   
        return $this->sendResponse(new ResourcesTask($task), 'Task Retrieved Successfully.');

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task, $id)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required',
            'priority' => 'required',
            'date' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
        $task = Task::find($id);   
        $task->name = $input['title'];
        $task->description = $input['description'];
        $task->priority = $input['priority'];
        $task->date = $input['date'];
        $task->save();
   
        return $this->sendResponse(new ResourcesTask($task), 'Task Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();
   
        return $this->sendResponse([], 'Task Deleted Successfully.');
    }
}
